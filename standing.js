

var s1=document.URL;
 s=0;
 count=0;
 y=1000;
for( i=0;i<s1.length;i++)
  {
    if(s1[i]>='0' && s1[i]<='9')
      {
        count++;
         x=s1[i]-'0';
        s+=(x*y);
        y/=10;
        

      }
    if(count>=4)
      break;
      
  }

  var a=document.querySelector('a[href="/contest/'+s+'/standings"]');
  if(a)
    {
      a.setAttribute('href','https://codeforces.com');
    }