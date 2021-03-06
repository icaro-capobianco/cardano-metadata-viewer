import { FunctionalComponent, h } from "preact"
import { ChakraProvider } from "@chakra-ui/react"

export const Provider : FunctionalComponent = ( { children } ) => (
	<ChakraProvider>
		{children}
	</ChakraProvider>
)

export default Provider
