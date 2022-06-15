import image from '../assets/images/sample1.jpeg'

export default () => {
  return (
    <div className="col image-section">
      <img src={image} alt="image name" className='image' />
    </div>
  )
}