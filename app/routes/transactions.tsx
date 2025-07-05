import { Card } from 'components/Card/Card';
import { Layout } from '../../components/Layout/Layout';
import { BasicInput } from 'components/BasicInput/BasicInput';
import { CaretDown, MagnifyingGlass } from 'components/Icons';
import { Typography } from 'components/Typography/Typography';
import {
  filterRow,
  individualSortRow,
  nowrap,
  searchBar,
  sortByTime,
  sortByType,
  sortRow,
} from 'pages/Transaction/Transactions.css';

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
              <div className={individualSortRow}>
                <Typography preset="preset4" color="grey500" className={nowrap}>
                  Sort by
                </Typography>
                <div className={sortByTime}>
                  <BasicInput placeholder="Latest" onChange={() => {}} Icon={CaretDown} />
                </div>
              </div>
              <div className={individualSortRow}>
                <Typography preset="preset4" color="grey500" className={nowrap}>
                  Filter by
                </Typography>
                <div className={sortByType}>
                  <BasicInput placeholder="All transactions" onChange={() => {}} Icon={CaretDown} />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </Layout>
  );
}
