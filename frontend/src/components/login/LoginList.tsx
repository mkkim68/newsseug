import styled from 'styled-components';
import LoginItem from './LoginItem';
import { LoginListProps } from '@/types/login';
function LoginList({ loginItemList }: Readonly<LoginListProps>) {
  return (
    <LoginListContainer>
      {loginItemList.map((item, index) => (
        <LoginItem key={index} icon={item.icon} />
      ))}
    </LoginListContainer>
  );
}
export default LoginList;

const LoginListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: calc(10vh);
  gap: calc(2.5vh);
`;
