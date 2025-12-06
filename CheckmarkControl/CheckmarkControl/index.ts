import { IInputs, IOutputs } from "./generated/ManifestTypes";
import {Checkmark, CheckmarkProps} from "./components/Checkmarks";
import * as React from "react";
import { webLightTheme } from "@fluentui/react-components";

export class CheckmarkControl implements ComponentFramework.ReactControl<IInputs, IOutputs> {
    private _context: ComponentFramework.Context<IInputs>;
    private _value: boolean;
    private _size: number | undefined;
    private notifyOutputChanged: () => void;
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
        state: ComponentFramework.Dictionary
    ): void {
        this.notifyOutputChanged = notifyOutputChanged;
        this._context = context;
        this._context.mode.trackContainerResize(true);        
        this._value = context.parameters.twoOptions.raw!;       
        this._size = context.parameters.iconSize.raw!;
        this._theme = context.fluentDesignLanguage;
    }

    /**
     * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     * @returns ReactElement root react element for the control
     */
    public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
       
        this._value = context.parameters.twoOptions.raw!
        const props: CheckmarkProps = {
            value: this._value,
            size: this._size,
            onChange: this.onChange,
            
        } as CheckmarkProps;

        props.value = this._value

        const isTestHarness = context.userSettings.userId === '{00000000-0000-0000-0000-000000000000}';
        //eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        props.theme = isTestHarness ? webLightTheme : this._theme;
        return React.createElement(
            Checkmark, props
        );
    }
    private onChange = (newValue: boolean) => {
        this._value = newValue;
        this.notifyOutputChanged();
    };
    /**
     * It is called by the framework prior to a control receiving new data.
     * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as "bound" or "output"
     */
    public getOutputs(): IOutputs {
        return { 
            twoOptions: this._value
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
