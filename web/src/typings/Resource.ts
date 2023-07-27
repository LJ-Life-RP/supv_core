export interface _BooleanSwitchProps {
	inputKey: string;
	label: string;
	description?: string;
  currentValue: boolean;
  resource: string;
  file: string;
	navKey: string;
	index: number;
	setResourceData: (resourceName: string, file: string, value: any, navKey: string, index: number) => void;
}

export interface _ButtonEditorProps {
  inputKey: string;
  value?: any;
  resource: string;
  file: string;
  isDisabled: boolean;
  setIsDisabled: (value: boolean) => void;
	navKey: string;
	index: number;
	setResourceData: (resourceName: string, file: string, value: any, navKey: string, index: number) => void;
}

export interface _StringEditorProps {
	inputKey: string;
	label: string;
	description?: string;
	placeholder?: string;
	defaultValue?: string;
	currentValue?: string;
	resource: string;
	file: string;
	navKey: string;
	index: number;
	setResourceData: (resourceName: string, file: string, value: any, navKey: string, index: number) => void;
}

export interface _BadgeEditorProps {
	inputKey: string;
	label: string;
	description?: string;
	placeholder?: string;
	defaultValue?: Array<string>;
  resource: string;
  file: string;
	navKey: string;
	index: number;
	setResourceData: (resourceName: string, file: string, value: any, navKey: string, index: number) => void;
}