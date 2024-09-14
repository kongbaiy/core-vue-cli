import { getBrowserLang } from '@packages/locales'

export default async function getLocale() {
    const fileName = getBrowserLang()
    const message = await import(`./lang/${fileName}.ts`)

    return message.default
}
