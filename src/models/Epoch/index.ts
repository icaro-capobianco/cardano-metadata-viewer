import { dandelionGQL } from '@repsistance/cardano-meta-handler/lib/fetch'
import { Epoch } from '@repsistance/cardano-meta-handler'

const query = dandelionGQL( 'testnet' )

const queryStr = `
{
	epochs {
		fees
		number
		transactionsCount
		startedAt
		lastBlockTime
	}
}
`
export type Type = {
	fees              : Epoch.Type['fees']
	number            : Epoch.Type['number']
	transactionsCount : Epoch.Type['transactionsCount']
	startedAt         : Epoch.Type['startedAt']
	lastBlockTime     : Epoch.Type['lastBlockTime']
}
export const get = async () : Promise<Type[]> => query( queryStr ).then( e => e.epochs ).then( e => {
	console.log(e)
	return e
} )
