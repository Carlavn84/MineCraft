import React, { Fragment } from 'react';

import { Label, Text } from 'fds/components';

// import t from 'fontoxml-localization/src/t.js';

export default function Workbench({
	totalChest,
	totalFurnace,
	totalOakPlank,
	totalTorch,
	totalStick,
	totalStonePickaxe
}) {
	return (
		<Fragment>
			<Label>Workbench</Label>
			{totalOakPlank && <Text>Oak plank: {totalOakPlank} </Text>}
			{totalChest && <Text>Chest: {totalChest}</Text>}
			{totalFurnace && <Text>Furnace: {totalFurnace} </Text>}
			{totalTorch && <Text>Torch: {totalTorch} </Text>}
			{totalStick && <Text>Stick: {totalStick}</Text>}
			{totalStonePickaxe && <Text>Stone pickaxe: {totalStonePickaxe}</Text>}
		</Fragment>
	);
}
