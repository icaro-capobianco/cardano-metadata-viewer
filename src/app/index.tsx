import { Container, VStack } from '@chakra-ui/react';
import { h, FunctionalComponent } from 'preact'
import { List as EpochList } from '../models/Epoch/List';
import { Provider as AppContextProvider } from './context';
import { Provider as ThemeProvider } from './theme'

export const App : FunctionalComponent = () => {

	return (
		<ThemeProvider>
			<AppContextProvider>
				<VStack h='full' minH='100vh' color='white' bg='blue.900' justify='center' >
					<Container maxW='xl' >
						<EpochList/>
					</Container>
				</VStack>
			</AppContextProvider>
		</ThemeProvider>
	)
}
