import TitleWithLink from '../components/TitleWithLink'
import AccountDetails from '../components/AccountDetails'

const Show = ({ account }) => {
  return(
    <>
      <TitleWithLink title="Account Details" linkText="Back to accounts" linkUrl="/accounts" />
      <div className="flex justify-center">
        <AccountDetails account={account} />
      </div>
    </>
  )
}

export default Show;