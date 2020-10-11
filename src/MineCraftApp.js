import React, { useCallback, useState } from 'react';

import { App, Card, Flex } from 'fds/components';

import MaterialForm from './components/MaterialForm.jsx';
import MaterialInventory from './components/MaterialInventory.jsx';
// import InventoryRestored from './components/InventoryRestored.jsx';
import Workbench from './components/Workbench.jsx';
import Recipes from './components/Recipes.jsx';

const centerContainerStyles = { width: '700px', margin: '50px' };

function MineCraftApp() {
	const [totalCoal, setTotalCoal] = useState(0);
	const [totalCobblestone, setTotalCobblestone] = useState(0);
	const [totalOakLog, setTotalOakLog] = useState(0);
	const [totalMaterial, setTotalMaterial] = useState(totalCoal + totalCobblestone + totalOakLog);
	const [totalOakPlank, setTotalOakPlank] = useState(0);
	const [totalChest, setTotalChest] = useState(0);
	const [totalFurnace, setTotalFurnace] = useState(0);
	const [totalStick, setTotalStick] = useState(0);
	const [totalTorch, setTotalTorch] = useState(0);
	const [totalStonePickaxe, setTotalStonePickaxe] = useState(0);
	const [totalCobblestoneInWorkbench, setTotalCobblestoneInWorkbench] = useState(0);

	console.log('total items:', totalMaterial);

	const handleAdd1CoalButtonClick = useCallback(() => {
		setTotalCoal(totalCoal + 1);
		setTotalMaterial(totalCoal + 1 + totalCobblestone + totalOakLog);
	}, [totalCoal, totalCobblestone, totalOakLog]);

	const handleAdd10CoalButtonClick = useCallback(() => {
		setTotalCoal(totalCoal + 10);
		setTotalMaterial(totalCoal + 10 + totalCobblestone + totalOakLog);
	}, [totalCoal, totalCobblestone, totalOakLog]);

	const handleAdd1Cobblestone = useCallback(() => {
		setTotalCobblestone(totalCobblestone + 1);
		setTotalMaterial(totalCobblestone + 1 + totalCoal + totalOakLog);
	}, [totalCoal, totalCobblestone, totalOakLog]);

	const handleAdd10Cobblestone = useCallback(() => {
		setTotalCobblestone(totalCobblestone + 10);
		setTotalMaterial(totalCobblestone + 10 + totalCoal + totalOakLog);
	}, [totalCoal, totalCobblestone, totalOakLog]);

	const handleAdd1OakLog = useCallback(() => {
		setTotalOakLog(totalOakLog + 1);
		setTotalMaterial(totalOakLog + 1 + totalCoal + totalCobblestone);
	}, [totalCoal, totalCobblestone, totalOakLog]);

	const handleAdd10OakLog = useCallback(() => {
		setTotalOakLog(totalOakLog + 10);
		setTotalMaterial(totalOakLog + 10 + totalCoal + totalCobblestone);
	}, [totalCoal, totalCobblestone, totalOakLog]);

	const handleAddCoalToBench = useCallback(() => {
		setTotalCoal(totalCoal - 1);
		setTotalMaterial(totalCoal - 1 + totalCobblestone + totalOakLog);
	}, [totalCoal, totalCobblestone, totalOakLog]);

	const handleAddCobblestoneToBench = useCallback(() => {
		const stinkyButt = totalCobblestoneInWorkbench;

		setTotalCobblestone(totalCobblestone - 1);
		setTotalMaterial(totalCobblestone - 1 + totalCoal + totalOakLog);

		const newCobblestoneInWorkbench = totalCobblestoneInWorkbench + 1;

		if (newCobblestoneInWorkbench >= 8) {
			setTotalFurnace(totalFurnace + 1);
			setTotalCobblestoneInWorkbench(newCobblestoneInWorkbench - 8);
		} else {
			setTotalCobblestoneInWorkbench(newCobblestoneInWorkbench);
		}
		console.log('stinkyButt', stinkyButt);
	}, [totalCoal, totalCobblestone, totalCobblestoneInWorkbench, totalFurnace, totalOakLog]);

	console.log('cobblestone in workbench', totalCobblestoneInWorkbench);
	console.log('furnace', totalFurnace);

	const handleAddOakLogToBench = useCallback(() => {
		setTotalOakLog(totalOakLog - 1);
		setTotalOakPlank(totalOakPlank + 4);
		setTotalMaterial(totalOakLog - 1 + totalCobblestone + totalCoal);
	}, [totalCoal, totalCobblestone, totalOakLog, totalOakPlank]);

	// const handleRestoreCoal = useCallback(() => setTotalCoal(totalCoal + 1), [totalCoal]);

	// const handleRestoreCobblestone = useCallback(() => setTotalCobblestone(totalCobblestone + 1), [
	// 	totalCobblestone
	// ]);

	// const handleRestoreOakLog = useCallback(() => setTotalOakLog(totalOakLog + 1), [totalOakLog]);

	const handleCreateOakPlank = useCallback(() => {
		setTotalOakLog(totalOakLog - 1);
		setTotalOakPlank(totalOakPlank + 4);
		setTotalMaterial(totalCoal + totalCobblestone + (totalOakLog - 1));
	}, [totalCoal, totalCobblestone, totalOakLog, totalOakPlank]);

	const handleCreateChest = useCallback(() => {
		setTotalChest(totalChest + 1);
		setTotalOakPlank(totalOakPlank - 8);
		setTotalMaterial(totalCoal + totalCobblestone + (totalOakLog - 2));
	}, [totalChest, totalCoal, totalCobblestone, totalOakLog, totalOakPlank]);

	const handleCreateFurnace = useCallback(() => {
		setTotalFurnace(totalFurnace + 1);
		setTotalCobblestone(totalCobblestone - 8);
		setTotalMaterial(totalCoal + totalOakLog + (totalCobblestone - 8));
	}, [totalFurnace, totalCoal, totalCobblestone, totalOakLog]);

	const handleCreateStick = useCallback(() => {
		setTotalStick(totalStick + 1);
		setTotalOakPlank(totalOakPlank - 1);
		// setTotalMaterial(totalCoal + totalCobblestonetotalOakLog + (totalCobblestone - 8));
	}, [totalStick, totalOakPlank]);

	const handleCreateTorch = useCallback(() => {
		setTotalTorch(totalTorch + 4);
		setTotalCoal(totalCoal - 1);
		setTotalStick(totalStick - 1);
		setTotalMaterial(totalCobblestone + totalOakLog + (totalCoal - 1));
	}, [totalTorch, totalCoal, totalStick, totalOakLog, totalCobblestone]);

	const handleCreateStonePickaxe = useCallback(() => {
		setTotalStonePickaxe(totalStonePickaxe + 1);
		setTotalCobblestone(totalCobblestone - 3);
		setTotalStick(totalStick - 2);
		setTotalMaterial(totalCoal + totalOakLog + (totalCobblestone - 3));
	}, [totalStonePickaxe, totalCobblestone, totalStick, totalCoal, totalOakLog]);

	return (
		<App>
			<Flex alignItems="center" flex="1" flexDirection="column">
				<Flex
					applyCss={centerContainerStyles}
					flex="1"
					flexDirection="column"
					paddingSize={{ vertical: 'l' }}
					spaceSize="l"
					alignItems="flex-strecht"
				>
					<Card>
						<MaterialForm
							onClickToAdd1Coal={handleAdd1CoalButtonClick}
							onClickToAdd10Coal={handleAdd10CoalButtonClick}
							onClickToAdd1Cobblestone={handleAdd1Cobblestone}
							onClickToAdd10Cobblestone={handleAdd10Cobblestone}
							onClickToAdd1Oaklog={handleAdd1OakLog}
							onClickToAdd10Oaklog={handleAdd10OakLog}
							isDisabledAdd1Material={totalMaterial < 100 ? false : true}
							isDisabledAdd10Material={totalMaterial <= 90 ? false : true}
						/>
					</Card>

					<Card>
						<MaterialInventory
							totalMaterial={totalMaterial}
							totalCoal={totalCoal}
							onClickForCoal={handleAddCoalToBench}
							totalCobblestone={totalCobblestone}
							onClickForCobblestone={handleAddCobblestoneToBench}
							totalOakLog={totalOakLog}
							onClickForOakLog={handleAddOakLogToBench}
							isDisabledAddCoalToBench={totalCoal < 1 ? true : false}
							isDisabledAddCobblestoneToBench={totalCobblestone < 1 ? true : false}
							isDisabledAddOakLogToBench={totalOakLog < 1 ? true : false}
						/>
					</Card>

					<Card>
						<Workbench
							totalOakPlank={totalOakPlank}
							totalChest={totalChest}
							totalFurnace={totalFurnace}
							totalStick={totalStick}
							totalTorch={totalTorch}
							totalStonePickaxe={totalStonePickaxe}
						/>
					</Card>

					<Card>
						<Recipes
							onClickCreateOakPlank={handleCreateOakPlank}
							isDisabledCreateOakPlank={totalOakLog >= 1 ? false : true}
							onClickCreateChest={handleCreateChest}
							isDisabledCreateChest={totalOakPlank >= 8 ? false : true}
							onClickCreateFurnace={handleCreateFurnace}
							isDisabledCreateFurnace={totalCobblestone >= 8 ? false : true}
							onClickCreateStick={handleCreateStick}
							isDisabledCreateStick={totalOakPlank >= 1 ? false : true}
							onClickCreateTorch={handleCreateTorch}
							isDisabledCreateTorch={totalCoal >= 1 && totalStick >= 1 ? false : true}
							onClickCreateStonePickaxe={handleCreateStonePickaxe}
							isDisabledCreateStonePickaxe={
								totalCobblestone >= 3 && totalStick >= 2 ? false : true
							}
						/>
					</Card>
					{/* 
					<Card>
						<InventoryRestored
							totalCoal={totalCoal}
							onClickForCoal={handleRestoreCoal}
							totalCobblestone={totalCobblestone}
							onClickForCobblestone={handleRestoreCobblestone}
							totalOakLog={totalOakLog}
							onClickForOakLog={handleRestoreOakLog}
						/>
					</Card> */}
				</Flex>
			</Flex>
		</App>
	);
}

export default MineCraftApp;
