export const useAnimalsRoutesInfo = () => {

   const routes = [
      { name: 'Terrestrial', path: 'terrestrial' },
      { name: 'Marine', path: 'marine' },
   ]


   const getNavLinkClass = ({ isActive }) => {
      return `nav-link ${ isActive ? 'active' : '' }`
   };


   return {
      routes,
      getNavLinkClass,
   }
}
