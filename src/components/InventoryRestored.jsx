import React, { Fragment } from 'react';

import { Button, Flex, Form, Label } from 'fds/components';

function InventoryRestored({
	totalCoal,
	totalCobblestone,
	totalOakLog,
	onClickForCoal,
	onClickForCobblestone,
	onClickForOakLog,
	isDisabled
}) {
	return (
		<Fragment>
			<Form>
				<Label>Inventory</Label>
				<Flex flex="none" justifyContent="flex-end" spaceSize="l">
					<Label colorName="text-muted-color">{totalCoal} x Coal</Label>
					<Button
						icon="fas fa-plus"
						label="Put 1 back to inventory"
						onClick={onClickForCoal}
						isDisabled={isDisabled}
					/>
				</Flex>

				<Flex flex="none" justifyContent="flex-end" spaceSize="l">
					<Label colorName="text-muted-color">{totalCobblestone} x Cobblestone</Label>
					<Button
						icon="fas fa-plus"
						label="Put 1 back to inventory"
						onClick={onClickForCobblestone}
						isDisabled={isDisabled}
					/>
				</Flex>

				<Flex flex="none" justifyContent="flex-end" spaceSize="l">
					<Label colorName="text-muted-color">{totalOakLog} x Cobblestone</Label>
					<Button
						icon="fas fa-plus"
						label="Put 1 back to inventory"
						onClick={onClickForOakLog}
						isDisabled={isDisabled}
					/>
				</Flex>
			</Form>
		</Fragment>
	);
}
export default InventoryRestored;
