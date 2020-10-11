import React, { Fragment } from 'react';

import { Button, Flex, Form, Label } from 'fds/components';

function Recipes({
	onClickCreateOakPlank,
	onClickCreateChest,
	isDisabledCreateChest,
	onClickCreateFurnace,
	isDisabledCreateFurnace,
	isDisabledCreateOakPlank,
	onClickCreateStick,
	isDisabledCreateStick,
	onClickCreateTorch,
	isDisabledCreateTorch,
	onClickCreateStonePickaxe,
	isDisabledCreateStonePickaxe
}) {
	return (
		<Fragment>
			<Form>
				<Label>Recipes</Label>
				<Flex flex="none" justifyContent="flex-end" spaceSize="l">
					<Label colorName="text-muted-color">4 x Oak plank</Label>
					<Button
						icon="fas fa-plus"
						label="Add to workbench"
						onClick={onClickCreateOakPlank}
						isDisabled={isDisabledCreateOakPlank}
					/>
				</Flex>

				<Flex flex="none" justifyContent="flex-end" spaceSize="l">
					<Label colorName="text-muted-color">1 x Chest</Label>
					<Button
						icon="fas fa-plus"
						label="Add to workbench"
						onClick={onClickCreateChest}
						isDisabled={isDisabledCreateChest}
					/>
				</Flex>

				<Flex flex="none" justifyContent="flex-end" spaceSize="l">
					<Label colorName="text-muted-color">1 x Furnace</Label>
					<Button
						icon="fas fa-plus"
						label="Add to workbench"
						onClick={onClickCreateFurnace}
						isDisabled={isDisabledCreateFurnace}
					/>
				</Flex>

				<Flex flex="none" justifyContent="flex-end" spaceSize="l">
					<Label colorName="text-muted-color">4 x Stick</Label>
					<Button
						icon="fas fa-plus"
						label="Add to workbench"
						onClick={onClickCreateStick}
						isDisabled={isDisabledCreateStick}
					/>
				</Flex>

				<Flex flex="none" justifyContent="flex-end" spaceSize="l">
					<Label colorName="text-muted-color">4 x Torch</Label>
					<Button
						icon="fas fa-plus"
						label="Add to workbench"
						onClick={onClickCreateTorch}
						isDisabled={isDisabledCreateTorch}
					/>
				</Flex>

				<Flex flex="none" justifyContent="flex-end" spaceSize="l">
					<Label colorName="text-muted-color">1 x Stone pickaxe</Label>
					<Button
						icon="fas fa-plus"
						label="Add to workbench"
						onClick={onClickCreateStonePickaxe}
						isDisabled={isDisabledCreateStonePickaxe}
					/>
				</Flex>
			</Form>
		</Fragment>
	);
}
export default Recipes;
