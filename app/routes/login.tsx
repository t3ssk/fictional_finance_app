import { BasicInput } from 'components/BasicInput/BasicInput';
import { Button } from 'components/Button/Button';
import { Card } from 'components/Card/Card';
import { Eye } from 'components/Icons';
import { Link } from 'components/Link/Link';
import { PasswordInput } from 'components/PasswordInput/PasswordInput';
import { Typography } from 'components/Typography/Typography';
import { Layout } from 'pages/Login/Layout';
import {
  loginFormCardContentStyles,
  loginFormStyles,
  signupLinkStyles,
} from 'pages/Login/Login.css';

export default function Login() {
  return (
    <Layout>
      <div className={loginFormStyles}>
        <Card>
          <div className={loginFormCardContentStyles}>
            <Typography component="h1" preset="preset1" color="grey900">
              Login
            </Typography>
            <div>
              <BasicInput label="Email" placeholder="Enter your email" type="email" fullWidth />
              <PasswordInput
                label="Password"
                placeholder="Enter your password"
                type="password"
                fullWidth
                Icon={Eye}
              />
            </div>
            <Button variant="primary" fullWidth>
              Login
            </Button>
            <Typography component="p" preset="preset4" color="grey500" className={signupLinkStyles}>
              Need to create an account? <Link to="/register">Sign Up</Link>
            </Typography>
          </div>
        </Card>
      </div>
    </Layout>
  );
}
