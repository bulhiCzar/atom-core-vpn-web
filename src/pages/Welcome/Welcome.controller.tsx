import { Button, Card, CopyTo, Input, Text } from '@uikit'
import { Link } from 'react-router-dom'

export const WelcomeController = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <Card className="p-12 w-full flex items-center flex-col text-center">
        <Text color="silver" className="text-5xl font-semibold mb-5 leading-tight">
          Congrats!
        </Text>

        <div className="border-b-2 border-neutral-700 w-1/6 mb-5" />

        <Text color="white" className="mb-10 md:max-w-[288px]">
          You have successfully registered your account, this is your personal app authorization code
        </Text>

        <div className="mb-20 border-2 border-purple rounded-lg py-5 text-4xl font-semibold px-10 md:max-w-[300px] md:w-full">
          <CopyTo
            textCopy="5yU7y0Y4"
            position="right"
            className="justify-center"
          >
            5yU7y0Y4
          </CopyTo>
        </div>

        <Input
          placeholder="Referral code (optional)"
          className="mb-5"
        />

        <Link to="/">
          <Button color="primary">
            Continue
          </Button>
        </Link>
      </Card>
    </div>
  )
}
