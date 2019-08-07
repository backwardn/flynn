import * as React from 'react';
import { debounce } from 'lodash';
import styled from 'styled-components';
import { LinkUp as LinkUpIcon, LinkDown as LinkDownIcon } from 'grommet-icons';
import { Text, Box, BoxProps, Button, CheckBox } from 'grommet';

export const valueCSS = (size: string) => `
	font-size: ${size === 'small' ? '2em' : '4em'};
	min-width: 1.2em;
	text-align: center;
	line-height: 1em;
`;

interface ValueInputProps {
	fontSize: string;
}

const ValueInput = styled.input`
	width: calc(0.7em + ${(props) => (props.value ? (props.value + '').length / 2 : 0)}em);
	border: none;
	&:focus {
		outline-width: 0;
	}
	font-weight: normal;
	${(props: ValueInputProps) => valueCSS(props.fontSize)};
`;

export const ValueText = styled(Text)`
	${(props) => valueCSS(props.size as string)};
`;

export const LabelText = styled(Text)`
	font-size: ${(props) => (props.size === 'small' ? '1em' : '1.5em')};
	line-height: 1.5em;
	margin: 0 0.5em;
`;

export interface Props extends BoxProps {
	value: number;
	originalValue?: number;
	showDelta?: boolean;
	showLabelDelta?: boolean;
	label: string;
	size?: 'small' | 'large';
	editable?: boolean;
	onChange?: (value: number) => void;
	onConfirmChange?: (scaleToZeroConfirmed: boolean) => void;
	confirmScaleToZero?: boolean;
	scaleToZeroConfirmed?: boolean;
}

/*
 * <ProcessScale /> renders the amount a process is scaled to and allows
 * editing that amount when `editable=true`.
 *
 * Example:
 *	<ProcessScale value={3} label="web" />
 *
 * Example:
 *	<ProcessScale size="small" value={3} label="web" />
 *
 * Example:
 *	<ProcessScale value={3} label="web" editable onChange={(newValue) => { do something with newValue }} />
 */
export default function ProcessScale({
	value: initialValue,
	originalValue = 0,
	showDelta = false,
	showLabelDelta = false,
	label,
	size = 'large',
	editable = false,
	onChange = () => {},
	onConfirmChange = () => {},
	confirmScaleToZero = false,
	scaleToZeroConfirmed = false,
	...boxProps
}: Props) {
	const [value, setValue] = React.useState(initialValue);

	const delta = React.useMemo(() => value - originalValue, [originalValue, value]);
	const deltaText = React.useMemo(
		() => {
			let sign = '+';
			if (delta < 0) {
				sign = '-';
			}
			return ` (${sign}${Math.abs(delta)})`;
		},
		[delta]
	);

	// Handle rapid changes as single change
	const onChangeDebounced = React.useMemo(
		() => {
			return debounce(onChange, 100);
		},
		[onChange]
	);

	// Send changes upstream via onChange() prop when value changes
	React.useEffect(
		() => {
			if (value !== initialValue) {
				onChangeDebounced.cancel();
				onChangeDebounced(value);
			}
		},
		[onChangeDebounced, value, initialValue]
	);

	// Handle incoming changes to props.value
	React.useEffect(
		() => {
			onChangeDebounced.cancel();
			setValue(initialValue);
		},
		[initialValue, onChangeDebounced]
	);

	const [valueEditable, setValueEditable] = React.useState(false);
	const valueInput = React.useRef(null) as React.RefObject<HTMLInputElement>;

	// Focus input when valueEditable enabled
	React.useLayoutEffect(
		() => {
			if (valueEditable && valueInput.current) {
				valueInput.current.focus();
			}
		},
		[valueEditable, valueInput]
	);

	const handleIncrement = (prevValue: number) => {
		return prevValue + 1;
	};

	const handleDecrement = (prevValue: number) => {
		return Math.max(prevValue - 1, 0);
	};

	return (
		<Box
			align="center"
			border="all"
			round
			title={showDelta ? `Scaled ${delta > 0 ? 'up ' : delta < 0 ? 'down ' : ''}to ${value}${deltaText}` : ''}
			{...boxProps}
		>
			<Box
				direction="row"
				align="center"
				justify="center"
				border={boxProps.direction === 'row' ? 'right' : 'bottom'}
				fill="horizontal"
			>
				{valueEditable ? (
					<ValueInput
						ref={valueInput}
						fontSize={size}
						onBlur={() => setValueEditable(false)}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setValue(Math.max(parseInt(e.target.value, 10) || 0, 0))
						}
						value={value}
					/>
				) : showDelta ? (
					<Box direction="row" pad="xsmall">
						<Box justify="center">{delta > 0 ? <LinkUpIcon /> : delta < 0 ? <LinkDownIcon /> : null}</Box>
						<ValueText size={size} onClick={() => (editable ? setValueEditable(true) : void 0)}>
							{value}
						</ValueText>
					</Box>
				) : (
					<ValueText size={size} onClick={() => (editable ? setValueEditable(true) : void 0)}>
						{value}
					</ValueText>
				)}
				{editable ? (
					<Box>
						<Button icon={<LinkUpIcon />} onClick={() => setValue(handleIncrement)} />
						<Button icon={<LinkDownIcon />} onClick={() => setValue(handleDecrement)} />
					</Box>
				) : null}
				{confirmScaleToZero && value === 0 ? (
					<Box>
						<CheckBox
							checked={scaleToZeroConfirmed}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => onConfirmChange(e.target.checked)}
						/>
					</Box>
				) : null}
			</Box>
			<LabelText>{showLabelDelta ? `${label}${deltaText}` : label}</LabelText>
		</Box>
	);
}
