import { Button, Card, Page, Text } from '@uikit'

const plans = [
  {
    title: '1 Month',
    price: {
      withDiscount: 1000,
      withoutDiscount: 1000,
      discount: '7%',
    },
  },
  {
    title: '2 Month',
    price: {
      withDiscount: 1000,
      withoutDiscount: 3000,
      discount: '7%',
    },
  },
  {
    title: '3 Month',
    price: {
      withDiscount: 1000,
      withoutDiscount: 3000,
      discount: '7%',
    },
  },
  {
    title: '4 Month',
    price: {
      withDiscount: 1000,
      withoutDiscount: 3000,
      discount: '7%',
    },
  },
]

export const PlanController = () => {
  return (
    <Page
      title="Billing plans"
      back
      className="flex flex-wrap gap-6 justify-center lg:-mx-28"
    >
      {plans.map(({ price: { withDiscount, withoutDiscount, discount }, title }) => (
        <Card
          key={title}
          className="flex flex-col items-center xl:max-w-[calc(33%-1.5rem)] w-full max-w-xs"
        >
          <Text
            color="silver"
            className="text-5xl font-semibold mb-8"
          >
            {title}
          </Text>

          <div className="border-b-2 border-neutral-700 w-1/2 mb-6" />

          <div className="flex items-center flex-col mb-3 flex-1">
            {withDiscount !== withoutDiscount &&
              <div className="flex gap-2 mb-1 font-medium">
                <div className="del text-">
                  {withoutDiscount}
                </div>
                <div className="bg-pink-600 rounded-lg px-2">
                  -{discount}
                </div>
              </div>
            }
            <div className="font-semibold flex gap-2">
              {withDiscount}
              <div className="text-purple">
                $ACVPN
              </div>
            </div>
          </div>

          <Button
            color="primary"
            className="w-full"
          >
            Buy
          </Button>
        </Card>
      ))}
    </Page>
  )
}
