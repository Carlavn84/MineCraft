import React, { Fragment } from 'react';

import { Button, Flex, Form, Label } from 'fds/components';

function MaterialForm({
	isDisabledAdd1Material,
	isDisabledAdd10Material,
	onClickToAdd1Coal,
	onClickToAdd10Coal,
	onClickToAdd1Cobblestone,
	onClickToAdd10Cobblestone,
	onClickToAdd1Oaklog,
	onClickToAdd10Oaklog
}) {
	return (
		<Fragment>
			<Form>
				<Label>Raw materials taken from the island</Label>
				<Flex flex="none" justifyContent="flex-end" spaceSize="l">
					<Label colorName="text-muted-color">Coal</Label>
					<Button
						icon="fas fa-plus"
						label="Add 1"
						onClick={onClickToAdd1Coal}
						isDisabled={isDisabledAdd1Material}
					/>

					<Button
						icon="fas fa-plus"
						label="Add 10"
						onClick={onClickToAdd10Coal}
						isDisabled={isDisabledAdd10Material}
					/>
				</Flex>

				<Flex flex="none" justifyContent="flex-end" spaceSize="l">
					<Label colorName="text-muted-color">Cobblestone</Label>
					<Button
						icon="fas fa-plus"
						label="Add 1"
						onClick={onClickToAdd1Cobblestone}
						isDisabled={isDisabledAdd1Material}
					/>

					<Button
						icon="fas fa-plus"
						label="Add 10"
						onClick={onClickToAdd10Cobblestone}
						isDisabled={isDisabledAdd10Material}
					/>
				</Flex>

				<Flex flex="none" justifyContent="flex-end" spaceSize="l">
					<Label colorName="text-muted-color">Oak log</Label>
					<Button
						icon="fas fa-plus"
						label="Add 1"
						onClick={onClickToAdd1Oaklog}
						isDisabled={isDisabledAdd1Material}
					/>

					<Button
						icon="fas fa-plus"
						label="Add 10"
						onClick={onClickToAdd10Oaklog}
						isDisabled={isDisabledAdd10Material}
					/>
				</Flex>
			</Form>
		</Fragment>
	);
}

export default MaterialForm;
