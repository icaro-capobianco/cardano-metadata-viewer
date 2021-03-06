import { createContext, FunctionalComponent, h } from "preact"
import { useState, useContext, StateUpdater } from "preact/hooks"

/** With typescript Definite Assignment assertion it's possible to:
 * "relay to TypeScript that a variable is indeed assigned for all intents and purposes, even if TypeScript’s analyses cannot detect so."
 * @src https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#definite-assignment-assertions
 */

class AppState {
	error !: Error | null
}
class AppActions {
	setError !: StateUpdater<AppState['error']>
}
class AppContext {
	state !: AppState
	actions !: AppActions
}

const contextInstance = new AppContext

export const context = createContext<AppContext>( contextInstance )

export const useAppState = () => useContext(context).state
export const useAppActions = () => useContext(context).actions

export const Provider : FunctionalComponent = ( { children } ) => {

	const [error, setError] = useState<AppState['error']>(null)

	const state = {
		error
	}

	const actions = {
		setError
	}

	return (
		<context.Provider value={ { state, actions } } >
			{children}
		</context.Provider>
	)
}

export default Provider
