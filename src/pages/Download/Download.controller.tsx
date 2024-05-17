import { Button, Card, Page } from '@uikit'
import { Windows } from './icons'

const list = [
  {
    name: 'Windows',
    Icon: Windows,
    links: [
      { name: 'win 10', link: 'https://goole.com' },
      { name: 'win 7', link: 'https://goole.com' },
      { name: 'win 8', link: 'https://goole.com' },
    ],
  },
  {
    name: 'Android',
    Icon: Windows,
    links: 'https://goole.com',
  },
] as const

export const DownloadController = () => {
  return (
    <Page
      title="Download Atom Core VPN"
      description="To start downloading the application, select the required operating system and click the download button"
      className="flex flex-wrap gap-6 md1:justify-around justify-center"
    >
      {list.map(({ name, Icon, links }) =>
        <Card
          key={name}
          className="flex flex-col gap-8 items-center md:min-w-56 w-full max-w-xs md:flex-[0_0_calc(33.33%-1.5rem)]"
        >
          <Icon />
          <span>{name}</span>
          {!Array.isArray(links)
            ? <a href={links as string} className="w-full">
              <Button color="primary" className="w-full">
                Download
              </Button>
            </a>
            : <Button
                color="primary"
                className="w-full"
            >
              Download
            </Button>
          }
        </Card>,
      )}
    </Page>
  )
}
