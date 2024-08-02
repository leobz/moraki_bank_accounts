import IndexCards from '../components/IndexCards'
import HeadMenu from '../components/HeadMenu'

const Index = ({accounts}) => {
  return(
    <div>
      <HeadMenu title="All Accounts" linkText="Create new account" linkUrl={"/accounts/new"}/>
      <IndexCards accounts={accounts} />
    </div>
  )
};

export default Index;