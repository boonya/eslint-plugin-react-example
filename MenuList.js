import BlnMenuList from '@material-ui/core/MenuList'
import BlnMenuItem from '@material-ui/core/MenuItem'
import PropTypes from 'prop-types'
import { forwardRef, useCallback } from 'react'

const MenuList = forwardRef(({ onClose, ...props }, ref) => {
  const onLogout = useCallback(() => {
    onClose()
  }, [onClose])

  return (
    <BlnMenuList ref={ref} {...props}>
      <BlnMenuItem key="logout" onClick={onLogout}>
        Logout
      </BlnMenuItem>
    </BlnMenuList>
  )
})

MenuList.displayName = 'MenuList'

MenuList.propTypes = {
  onClose: PropTypes.func
}

MenuList.defaultProps = {
  onClose: () => null
}

export default MenuList
