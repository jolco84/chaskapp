


export default function Pie()  {

    return(
        <footer bg='light' className='text-center text-lg-left'>
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a className='text-dark' href='http://localhost:3000/'>
            CHASMASK
          </a>
        </div>
      </footer>
    );
}

