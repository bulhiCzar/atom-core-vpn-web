import { Button, Card, Page } from '@uikit'
import { Download } from './icons'
import { ButtonDropDown } from '../../@uikit/ButtonDropDown'

const list = [
  {
    name: 'Windows',
    icon: '/os_icons/win.png',
    links: [
      { name: 'win 10', link: 'https://goole.com' },
      { name: 'win 7', link: 'https://goole.com' },
      { name: 'win 8', link: 'https://wds.wargaming.net/wgc/releases_tTrHgLCKHBRiaL/wgc_24.01.00.5433_eu/world_of_tanks_install_eu.exe' },
    ],
  },
  {
    name: 'Android',
    icon: '/os_icons/android.png',
    links: 'https://goole.com',
  },
  {
    name: 'Android',
    icon: '/os_icons/android.png',
    links: 'https://goole.com',
  },
  {
    name: 'Android',
    icon: '/os_icons/android.png',
    links: 'https://goole.com',
  },
  {
    name: 'Android',
    icon: '/os_icons/android.png',
    links: 'https://goole.com',
  },
] as const

export const DownloadController = () => {
  return (
    <Page
      title="Download Atom Core VPN"
      description="To start downloading the application, select the required operating system and click the download button"
      className="flex flex-wrap gap-6 justify-center"
    >
      {list.map(({ name, icon, links }) =>
        <Card
          key={name}
          className="flex flex-col gap-8 items-center md:max-w-[calc(33%-1.5rem)] w-full max-w-xs"
        >
          <img
            src={icon}
          />
          <span>{name}</span>
          {!Array.isArray(links)
            ? <a href={links as string} className="w-full" download>
              <Button color="primary" className="w-full">
                Download
              </Button>
            </a>
            :
            <ButtonDropDown
              title="Download"
              data={links.map(({ name, link }) => ({
                name,
                label: <a
                  key={name}
                  href={link}
                  download="file"
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-between items-center group"
                >
                  {name}
                  <Download className="group-hover:opacity-100 opacity-0" />
                </a>,
              }))}
            />
          }
        </Card>,
      )}
    </Page>
  )
}
