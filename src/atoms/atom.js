import {atom, selector} from 'recoil'

export const userAtom = atom({
    key:"userAtom",
    default:"guruprasad403"
})

export const propAtom = atom({
    key:"propAtom",
    default: selector({
        key:"propAtomSelectors",
        get: async ({get})=>{
            const value = get(userAtom);
                const res = await fetch(`https://api.github.com/users/${value}`);
                const json = await res.json();
                return json;
        }
    })
})