import { Card } from 'components/Card/Card';
import { Layout } from '../../components/Layout/Layout';
import { BasicInput } from 'components/BasicInput/BasicInput';
import { Filter, MagnifyingGlass, Sort } from 'components/Icons';
import {
  filterRow,
  searchBar,
  sortByTime,
  sortByType,
  sortRow,
} from 'pages/Transaction/Transactions.css';
import { SortByInput } from 'pages/Transaction/components/SortByInput';

export default function Transactions() {
  return (
    <Layout title="Transactions">
      <section>
        <Card padding="large">
          <div className={filterRow}>
            <div className={searchBar}>
              <BasicInput
                Icon={MagnifyingGlass}
                buttonTitle="Search"
                onIconClick={() => {}}
                fullWidth
              />
            </div>
            <div className={sortRow}>
              <SortByInput
                label="Sort by"
                placeholder="Time"
                MobileIcon={Sort}
                onSelectChange={() => {}}
                inputWrapperClassName={sortByTime}
                values={[
                  { label: 'Newest', value: 'newest' },
                  { label: 'Oldest', value: 'oldest' },
                ]}
              />
              <SortByInput
                label="Category"
                placeholder="All transactions"
                MobileIcon={Filter}
                onSelectChange={() => {}}
                inputWrapperClassName={sortByType}
                values={[
                  { label: 'All transactions', value: 'all' },
                  { label: 'Income', value: 'income' },
                  { label: 'Expense', value: 'expense' },
                ]}
              />
            </div>
          </div>
        </Card>
      </section>
    </Layout>
  );
}
