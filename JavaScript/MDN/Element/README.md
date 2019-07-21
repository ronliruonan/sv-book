

## Element.scrollTo()
-  element.scrollTo(x-cord, y-cord)
-  element.scrollTo(options)
   ```
   element.scrollTo({
       top: 100,
       left: 100,
       behavior: 'smooth'
   })
   ```
## Element.scrollBy()
-  element.scrollBy(x-cord, y-cord)
-  element.scrollBy(options)
   ```
   element.scrollBy({
       top: 100,
       left: 100,
       behavior: 'smooth'
   })
   ```

## Element.scroll()
-  element.scroll(x-cord, y-cord)
-  element.scroll(options)
   ```
   element.scroll({
       top: 100,
       left: 100,
       behavior: 'smooth'
   })
   ```

   ```
   {
     scrollTop, scrollLeft,     // 上边、左边滚动的距离
     offsetWidth, offsetHeight, // id的宽高
     scrollWidth, scrollHeight  // 获取child的宽高
   } = documeng.getElementById('id')
   ```