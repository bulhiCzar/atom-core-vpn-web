/* eslint-disable no-console */
function fallbackCopyTextToClipboard(text :string) {
  let textArea = document.createElement('textarea')
  textArea.value = text

  // Avoid scrolling to bottom
  textArea.style.top = '0'
  textArea.style.left = '0'
  textArea.style.position = 'fixed'

  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()

  try {
    let successful = document.execCommand('copy')
    let msg = successful ? 'successful' : 'unsuccessful'
    console.log(`Fallback: Copying text command was ${msg}`)
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err)
  }

  document.body.removeChild(textArea)
}
export const copyTextToClipboard = (text: string) => {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text)
    return
  }
  navigator.clipboard.writeText(text).then(() => {
    // toast('Copying to clipboard was successful!')
  }, (err) => {
    console.error('Async: Could not copy text: ', err)
  })
}
