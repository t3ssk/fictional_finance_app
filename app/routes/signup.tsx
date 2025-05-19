import { BasicInput } from 'components/BasicInput/BasicInput';
import { Button } from 'components/Button/Button';
import { Card } from 'components/Card/Card';
import { Link } from 'components/Link/Link';
import { PasswordInput } from 'components/PasswordInput/PasswordInput';
import { Typography } from 'components/Typography/Typography';
import { Layout } from 'pages/Login/Layout';
import {
  loginFormCardContentStyles,
  loginFormStyles,
  signupLinkStyles,
} from 'pages/Login/Login.css';

//TODO: Add signup functionality
export default function Signup() {
  return (
    <Layout>
      <div className={loginFormStyles}>
        <Card padding="large" variant="default">
          <div className={loginFormCardContentStyles}>
            <Typography component="h1" preset="preset1" color="grey900">
              Sign Up
            </Typography>
            <div>
              <BasicInput label="Name" placeholder="Enter your name" type="text" fullWidth />
              <BasicInput label="Email" placeholder="Enter your email" type="email" fullWidth />
              <PasswordInput
                label="Create Password"
                placeholder="Enter your password"
                helperText="Passwords must be at least 8 characters"
                fullWidth
              />
            </div>
            <Button variant="primary" fullWidth>
              Create Account
            </Button>
            <Typography component="p" preset="preset4" color="grey500" className={signupLinkStyles}>
              Already have an account? <Link to="/login">Login</Link>
            </Typography>
          </div>
        </Card>
      </div>
    </Layout>
  );
}
