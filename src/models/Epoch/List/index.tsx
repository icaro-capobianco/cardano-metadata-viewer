import { Accordion, AccordionItem, Text, Skeleton, Stack, Flex, AccordionPanel, AccordionButton, AccordionIcon, Box, Heading } from '@chakra-ui/react'
import { FunctionalComponent, h } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import { Epoch } from '../..'
import { useAppActions } from '../../../app/context'

export const List : FunctionalComponent = () => {

	const [epochs, setEpochs] = useState<Epoch.Type[]>([])
	const [loading, setLoading] = useState<boolean>(true)

	const { setError } = useAppActions()

	useEffect(() => {
		Epoch.get()
		.then(setEpochs)
		.catch(setError)
		.finally(()=>setLoading(false))
	}, [])

	console.log( epochs )

	return (
		<Box w='full' >
			<Heading>Cardano Epoch Listing</Heading>
			{ loading ? (
				<Stack>
					<Skeleton height="20px" />
					<Skeleton height="20px" />
					<Skeleton height="20px" />
				</Stack>
			) : (
				<Accordion allowMultiple={true} allowToggle={true} >
					{epochs.map( epoch => (
						<AccordionItem rounded={2} my={4} shadow='md' bg='white' color='gray.900' p={4}>
							<AccordionButton>
								<Flex justify='space-between' w='full' >
									<Text>#{epoch.number}</Text>
									<Text>{epoch.startedAt} - {epoch.lastBlockTime}</Text>
								</Flex>
								<AccordionIcon />
							</AccordionButton>
							<AccordionPanel pb={4}>
								<Flex justify='space-between' w='xs'>
									<b>Fees</b>
									₳{epoch.fees/1000000}
								</Flex>
								<Flex justify='space-between' w='xs'>
									<b>Transactions</b>
									{epoch.transactionsCount}
								</Flex>
							</AccordionPanel>
						</AccordionItem>
					) )}
				</Accordion>
			) }
		</Box>
	)
}
