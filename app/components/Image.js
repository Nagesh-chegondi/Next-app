

function Image(props) {
  return (
    
       <div className="cursor-pointer transition-transform duration-700 ease-in-out hover:scale-[1.15]">
              <img className="rounded-[20px] filter grayscale transition-all duration-800 ease-in-out hover:grayscale-0 hover:-rotate-3 min-w-[190px] h-[179px] hover:z-20" src={props.source} alt="Gallery image" />
            </div>

  )
}

export default Image
