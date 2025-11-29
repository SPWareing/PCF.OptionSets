import { IInputs, IOutputs } from './generated/ManifestTypes';
import { OptionsetColour, IOptionsetColourProps } from './components/OptionsetColour';
import { webLightTheme } from '@fluentui/react-components';
import * as React from 'react';

export class OptionsetColourControl implements ComponentFramework.ReactControl<IInputs, IOutputs> {
    private notifyOutputChanged: () => void;
    private _context: ComponentFramework.Context<IInputs>;
    private _value: number | null;
    private _theme: ComponentFramework.Theme;

    /**
     * Empty constructor.
     */
    constructor() {
        // Empty
    }

    /**
     * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
     * Data-set values are not initialized here, use updateView.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
     * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
     * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
     */
    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary,
    ): void {
        this.notifyOutputChanged = notifyOutputChanged;
        this._context = context;
        this._context.mode.trackContainerResize(true);
        this._theme = context.fluentDesignLanguage;
        this._value = context.parameters.optionSet.raw;
    }

    /**
     * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     * @returns ReactElement root react element for the control
     */
    public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
        const isTestHarness = context.userSettings.userId === '{00000000-0000-0000-0000-000000000000}';
        this._value = context.parameters.optionSet.raw;
        const props: IOptionsetColourProps = {} as IOptionsetColourProps;
        const rawOptions = isTestHarness
            ? ([
                  { Value: 1, Label: 'Option 1', Color: 'Red' },
                  { Value: 2, Label: 'Option 2', Color: 'Green' },
                  { Value: 3, Label: 'Option 3', Color: 'Blue' },
              ] as ComponentFramework.PropertyHelper.OptionMetadata[])
            : (context.parameters.optionSet.attributes?.Options ?? []);
        props.options = rawOptions;
        props.selectedValue = this._value ?? undefined;
        //eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        props.theme = isTestHarness ? webLightTheme : this._theme;
        props.onChange = this.onChange;
        return React.createElement(OptionsetColour, props);
    }

    private onChange = (newValue: number | undefined): void => {
        this._value = newValue ?? null;
        this.notifyOutputChanged();
    };

    /**
     * It is called by the framework prior to a control receiving new data.
     * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as "bound" or "output"
     */
    public getOutputs(): IOutputs {
        return {
            optionSet: this._value ?? undefined,
        };
    }

    /**
     * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
     * i.e. cancelling any pending remote calls, removing listeners, etc.
     */
    public destroy(): void {
        // Add code to cleanup control if necessary
    }
}
