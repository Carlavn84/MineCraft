import React, { Fragment } from 'react';

import { Button, Flex, Form, Label } from 'fds/components';

function MaterialInventory({
	totalCoal,
	totalCobblestone,
	totalOakLog,
	totalMaterial,
	onClickForCoal,
	onClickForCobblestone,
	onClickForOakLog,
	isDisabledAddCoalToBench,
	isDisabledAddCobblestoneToBench,
	isDisabledAddOakLogToBench
}) {
	return (
		<Fragment>
			<Form>
				<Label>Inventory ({totalMaterial}%) </Label>
				<Flex flex="none" justifyContent="flex-end" spaceSize="l">
					<Label colorName="text-muted-color">{totalCoal} x Coal</Label>
					<Button
						icon="fas fa-plus"
						label="Add 1 to workbench"
						onClick={onClickForCoal}
						isDisabled={isDisabledAddCoalToBench}
					/>
				</Flex>

				<Flex flex="none" justifyContent="flex-end" spaceSize="l">
					<Label colorName="text-muted-color">{totalCobblestone} x Cobblestone</Label>
					<Button
						icon="fas fa-plus"
						label="Add 1 to workbench"
						onClick={onClickForCobblestone}
						isDisabled={isDisabledAddCobblestoneToBench}
					/>
				</Flex>

				<Flex flex="none" justifyContent="flex-end" spaceSize="l">
					<Label colorName="text-muted-color">{totalOakLog} x Oak Log</Label>
					<Button
						icon="fas fa-plus"
						label="Add 1 to workbench"
						onClick={onClickForOakLog}
						isDisabled={isDisabledAddOakLogToBench}
					/>
				</Flex>
			</Form>
		</Fragment>
	);
}
export default MaterialInventory;
