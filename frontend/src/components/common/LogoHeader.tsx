import { LogoHeaderProps } from '@/types/common';
import styled from 'styled-components';

function LogoHeader({ size = 48 }: Readonly<LogoHeaderProps>) {
  return (
    <LogoContainer $size={size}>
      <StyledSVG
        $size={size}
        viewBox="0 0 40 18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="&#235;&#161;&#156;&#234;&#179;&#160;">
          <path
            id="Vector"
            d="M14.8486 14.086V17.5577C14.8486 17.8526 14.6984 18 14.398 18H11.1534C10.8529 18 10.7027 17.8526 10.7027 17.5577V14.086H7.07506V17.5577C7.07506 17.8526 6.92485 18 6.62442 18H3.37981C3.07938 18 2.92916 17.8526 2.92916 17.5577V14.086H0.473173C0.157724 14.086 0 13.9238 0 13.5995V11.145C0 10.8501 0.157724 10.7027 0.473173 10.7027H17.3046C17.6201 10.7027 17.7778 10.8501 17.7778 11.145V13.5995C17.7778 13.9238 17.6201 14.086 17.3046 14.086H14.8486ZM5.1373 5.52825H16.6962C17.0117 5.52825 17.1694 5.67567 17.1694 5.97051V8.55774C17.1694 8.85258 17.0117 9 16.6962 9H1.1266C0.976388 9 0.856217 8.96314 0.766089 8.88943C0.675961 8.81572 0.638408 8.69779 0.653429 8.53563V0.420147C0.683472 0.140049 0.841196 0 1.1266 0H4.66413C4.9946 0 5.15233 0.154791 5.1373 0.464373V5.52825Z"
          />
          <g id="Intersect">
            <path d="M20.3175 8.88888V10.9556C20.3175 11.2666 20.4752 11.4223 20.7906 11.4223H37.6221C37.6744 11.4223 37.7224 11.4182 37.766 11.4098C37.8716 11.3891 37.9518 11.3432 38.0066 11.2723C38.0657 11.1957 38.0952 11.0902 38.0952 10.9556V8.88888C38.0952 8.57781 37.9375 8.42212 37.6221 8.42212H20.7906C20.4752 8.42212 20.3175 8.57781 20.3175 8.88888Z" />
            <path d="M21.1512 15.6C20.8357 15.6 20.6779 15.4666 20.6779 15.2001V13.2445C20.6779 12.9482 20.8357 12.8 21.1512 12.8H37.3292C37.6296 12.8 37.7798 12.9482 37.7798 13.2445V13.5H39.3651C39.7157 13.5 40 13.7878 40 14.1429C40 14.4979 39.7157 14.7857 39.3651 14.7857H37.7798V17.5555C37.7798 17.8518 37.6296 18 37.3292 18H33.8592C33.7462 18 33.6544 17.979 33.5839 17.9369C33.467 17.8675 33.4086 17.7404 33.4086 17.5555V15.6H21.1512Z" />
            <path d="M24.7604 6.96031C24.7281 6.99484 24.6946 7.02811 24.6598 7.06013C24.6326 7.08524 24.6047 7.10972 24.576 7.13326C24.5009 7.20734 24.3958 7.24438 24.2606 7.24438H20.9033C20.723 7.24438 20.5879 7.19259 20.4977 7.08901C20.4226 6.98511 20.4376 6.85923 20.5428 6.71108L25.0041 0.355643C25.0383 0.301653 25.0709 0.253941 25.102 0.212193C25.1392 0.162284 25.1742 0.121163 25.2069 0.0888323C25.282 0.0295061 25.3871 0 25.5224 0H29.105C29.166 0 29.2199 0.00910295 29.2666 0.0273089C29.3463 0.0583845 29.4051 0.115827 29.443 0.199951C29.5181 0.318603 29.503 0.444475 29.3979 0.577881L24.8238 6.88874C24.8033 6.91322 24.7821 6.93708 24.7604 6.96031Z" />
            <path d="M32.3248 5.45267C32.2937 5.38644 32.2791 5.31801 32.281 5.24738C32.2841 5.13407 32.3295 5.01447 32.4171 4.88892L33.9268 2.77766C34.0169 2.64457 34.1146 2.58524 34.2198 2.59999C34.2941 2.61035 34.3684 2.64708 34.4427 2.70954C34.4735 2.73528 34.5044 2.76542 34.5352 2.79994L37.9375 6.71108C37.9517 6.72677 37.9645 6.74247 37.976 6.75785L37.9891 6.77668L38.009 6.80932C38.0628 6.90663 38.0615 6.99986 38.0051 7.08901C37.9641 7.14551 37.9075 7.18663 37.8353 7.21237C37.7751 7.23371 37.704 7.24438 37.6221 7.24438H34.1746C34.0244 7.24438 33.8968 7.20734 33.7916 7.13326C33.7015 7.05919 33.6189 6.97789 33.5438 6.88874L32.3721 5.53334C32.3535 5.50697 32.3378 5.47998 32.3248 5.45267Z" />
            <path d="M30.1189 6.88874C30.0438 6.97789 29.9612 7.05919 29.871 7.13326C29.8277 7.17595 29.7744 7.2064 29.7111 7.22461C29.6826 7.23277 29.6522 7.23842 29.6197 7.24156C29.5991 7.24344 29.5777 7.24438 29.5556 7.24438H26.1983C26.0181 7.24438 25.8829 7.19259 25.7927 7.08901C25.7176 6.98511 25.7327 6.85923 25.8378 6.71108L30.2992 0.355643C30.3743 0.236991 30.4419 0.148158 30.5019 0.0888323C30.577 0.0295061 30.6822 0 30.8174 0H36.1905C36.5411 0 36.8254 0.287842 36.8254 0.642857C36.8254 0.997872 36.5411 1.28571 36.1905 1.28571H34.1799L30.1189 6.88874Z" />
          </g>
        </g>
      </StyledSVG>
    </LogoContainer>
  );
}

const LogoContainer = styled.div<{ $size: number }>`
  display: flex;
  width: 100%;
  height: 6.7%;
  padding: 0px 10px;
  align-items: center;
  background-color: white;
  position: fixed;
  z-index: 5;
  top: 0;
`;

const StyledSVG = styled.svg<{ $size: number }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size / 2.22}px;
  /* margin: 10px 0; */
  path {
    fill: ${({ theme }) => theme.mainColor};
  }
`;

export default LogoHeader;
