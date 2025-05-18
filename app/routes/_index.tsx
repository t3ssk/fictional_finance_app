import type { MetaFunction } from '@remix-run/node';
import { BasicInput } from 'components/BasicInput/BasicInput';
export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
  return (
    <div>
      <BasicInput label="Basic Input" helperText="Helper text" />
    </div>
  );
}
