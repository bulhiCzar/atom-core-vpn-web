import { Button, List, Page, CopyTo } from '@uikit'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import { ModalConfirm } from '../../@uikit/ModalConfirm'

const className = 'flex gap-10 md:items-center w-full md:w-auto justify-between'

export const DashboardController = () => {
  return (
    <>
      <Page
        title="Overview"
        className="md:mb-24 mb-16"
      >
        <List
          titleVariant="big"
          data={[
            {
              title: 'Username',
              value: <div className={className}>...address...</div>,
            },
            {
              title: 'Plan',
              value: <div className={className}>
                <div>1 month</div>
                <Link to="/plan">
                  <Button color="primary">Upgrade</Button>
                </Link>
              </div>,
            },
            {
              title: 'Expires',
              value: <div className={className}>
                <div>{dayjs().format('D MMM YYYY')}</div>
                <Button color="primary" variant="bordered">Renew</Button>
              </div>,
            },
            {
              title: 'Activate code',
              value: <div className={className}>
                <CopyTo
                  position="right"
                  textCopy="5yU7y0Y4"
                >
                  5yU7y0Y4
                </CopyTo>
                <Button color="primary" variant="bordered">Generate new</Button>
              </div>,
            },
          ]}
        />
      </Page>

      <Page
        title="Active sessions 1/3"
        className="mb-32"
      >
        <List
          className="md:-mt-4"
          titleVariant="small"
          data={[
            {
              title: <div className="md:block hidden">iphone</div>,
              value: (
                <div className={`${className} items-center`}>
                  <div className="font-normal text-xl md:hidden block">iphone</div>
                  <Button
                    color="error"
                    variant="text"
                  >
                    exit
                  </Button>
                </div>
              ),
            },
          ]}
        />
      </Page>

      {false && <ModalConfirm
        title="Warning!"
        description="You can generate new authorization code in your account at any time, but note that all active sessions will be terminated"
        confirmButtonText="Generate new"
      />
      }
    </>
  )
}
