// import Head from 'next/head'
import Image from 'next/image'
import Category from '../components/Category'
import DownloadButton from '../components/DownloadButton'
import MenuItem from '../components/MenuItem'

export default function Home() {
  return (
    <div>
			<div className=' h-min bg-[url("/assets/images/header-bg.png")] bg-no-repeat bg-cover pt-[80px] md:pt-[150px]' >
      <div className=" flex flex-col-reverse md:flex-row items-center gap-10 container mx-auto pb-5">
      <div className="right">
        <p className=' font-hotpizza text-5xl leading-[3.5rem] mb-6'>
          Food delivered <br /> the <span className=' text-mustard-red'>speed</span> <br /> of a click 
        </p>
        <div className="buttons flex gap-5 flex-col lg:flex-row">
        <DownloadButton icon='/assets/svg/apple.svg' topText='Download on the' bottomText='AppStore'/>
        <DownloadButton icon='/assets/svg/playstore.svg' topText='Get it on the' bottomText='PlayStore'/>
        </div>
      </div>
      <div className="left ml-52 ">
        <Image width={483} height={466} alt='man with pizza' className='' src='/assets/svg/hero.svg' />
      </div>
      </div>
			
    </div>
			<div className="container my-12 mx-auto">
				<h2 className=' font-hotpizza text-2xl'>Welcome to Realeza</h2>
			</div>
			<div className="container mx-auto my-12 grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-7 md:grid-cols-4 gap-5 justify-between justify-items-center xl:mx-auto">
				<Category category="all" categoryImage="/assets/svg/all.svg"/>
				<Category category="burger" categoryImage="/assets/svg/burger.svg"/>
				<Category category="pizza" categoryImage="/assets/svg/pizza.svg"/>
				<Category category="chips" categoryImage="/assets/svg/chips.svg"/>
				<Category category="chicken" categoryImage="/assets/svg/chicken.svg"/>
				<Category category="sharwama" categoryImage="/assets/svg/sharwama.svg"s/>
				<Category category="drinks" categoryImage="/assets/svg/drink.svg"/>
			</div>
      <div className="container mx-auto my-12">
        <h2 className=" font-hotpizza text-2xl mb-5" >All</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 justify-items-center xl:justify-self-start ">
          <MenuItem mealImage="/assets/images/meal.png" iconImage="/assets/images/icon.png" title="Burger" description="Nunc in fusce pretium, netus libero pulvinar nunc varius vel. Enim."/> 
          <MenuItem mealImage="/assets/images/meal2.png" iconImage="/assets/images/kfc.png" title="Chips" description="Nunc in fusce pretium, netus libero pulvinar nunc varius vel. Enim."/> 
          <MenuItem mealImage="/assets/images/pizza.png" iconImage="/assets/images/mambos.png" title="Pizza" description="Nunc in fusce pretium, netus libero pulvinar nunc varius vel. Enim."/> 
          <MenuItem mealImage="/assets/images/meal.png" iconImage="/assets/images/chickeninn.png" title="Burger" description="Nunc in fusce pretium, netus libero pulvinar nunc varius vel. Enim."/> 
          <MenuItem mealImage="/assets/images/chicken.png" iconImage="/assets/images/kfc.png" title="Chicken" description="Nunc in fusce pretium, netus libero pulvinar nunc varius vel. Enim."/> 
          <MenuItem mealImage="/assets/images/meal2.png" iconImage="/assets/images/kfc.png" title="Chips" description="Nunc in fusce pretium, netus libero pulvinar nunc varius vel. Enim."/> 
          <MenuItem mealImage="/assets/images/meal.png" iconImage="/assets/images/chickeninn.png" title="Burger" description="Nunc in fusce pretium, netus libero pulvinar nunc varius vel. Enim."/> 
          <MenuItem mealImage="/assets/images/meal.png" iconImage="/assets/images/chickeninn.png" title="Burger" description="Nunc in fusce pretium, netus libero pulvinar nunc varius vel. Enim."/>
          <MenuItem mealImage="/assets/images/meal.png" iconImage="/assets/images/chickeninn.png" title="Burger" description="Nunc in fusce pretium, netus libero pulvinar nunc varius vel. Enim."/>
          <MenuItem mealImage="/assets/images/meal.png" iconImage="/assets/images/chickeninn.png" title="Burger" description="Nunc in fusce pretium, netus libero pulvinar nunc varius vel. Enim."/>
        </div>
      </div>

      <div className="container mx-auto">
      <div className="featured p-9 w-full h-[469px] bg-[url('/assets/images/featured.png')] bg-no-repeat bg-cover bg-center rounded-xl">
        <div className="content flex items-center gap-8">
          <Image src='/assets/images/icon.png' height={84} width={84} alt="icon"/>
          <div >
            <h3 className=' text-2xl text-white font-medium'>Featured</h3>
            <p className=' text-white text-lg'> meal of the week</p>
          </div>
        </div>

      </div>

			</div>
		</div>
  )
}
