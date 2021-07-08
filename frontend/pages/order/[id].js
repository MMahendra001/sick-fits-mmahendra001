import SingleOrder from '../../components/SingleOrder';

export default function singleOrderPage({ query }) {
  return <SingleOrder id={query.id} />;
}
