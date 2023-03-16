import { ContainerProps } from './Container.props';

import './container.scss';

const Container = ({children, ...props}: ContainerProps) => {
  return (
    <div className='container' {...props} >
      {children}
    </div>
  );
}
 
export default Container;