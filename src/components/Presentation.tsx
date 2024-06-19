import React, { Children } from 'react'

export const Presentation = ({title, bg, children}:{title: string,bg:string, children: React.ReactNode}) => {
  return (
    <div className={`flex flex-col justify-center items-center gap-5 text-white text-center ${bg}`}>
<p className='text-5xl font-bold m-6'>{title}</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, suscipit iste. Officiis omnis hic consequuntur quisquam, illo doloribus non, beatae eos atque quia sint vero ipsa ducimus veniam quo reiciendis quam iusto praesentium ipsum nisi qui explicabo accusantium mollitia? Consequuntur aspernatur obcaecati accusamus aperiam enim? Accusamus nam tenetur id, nisi aliquid temporibus tempora aut quis soluta voluptatum aliquam voluptatibus sapiente impedit ab ratione vitae, dolore repellendus eaque quae! Obcaecati rerum repudiandae error modi sapiente placeat sed ipsam illo deleniti, quae molestiae dolore porro vitae officia ab omnis vero? Hic, eos sequi nulla esse tenetur totam facere, illo nemo sapiente aperiam numquam eligendi voluptates similique dolores ducimus impedit? Aliquid et quas ut voluptates optio vitae eos alias ratione blanditiis, voluptate exercitationem praesentium tenetur nisi nobis cum, ducimus illo inventore recusandae laboriosam rerum dolor nam? Aliquid soluta minima vitae iure voluptas repudiandae nesciunt commodi laudantium et molestiae natus praesentium, placeat temporibus ea voluptate hic consequuntur? Aliquam laboriosam dignissimos reprehenderit deserunt nesciunt aliquid doloribus ipsum tenetur, quisquam earum, adipisci consequatur eveniet tempora amet cumque veritatis inventore veniam omnis officiis ducimus ratione dolorum odit magni. Itaque corporis nam harum minima placeat, cum, illum nisi quod quaerat voluptatum velit autem fuga corrupti exercitationem eveniet! </p>
{children}
    </div>
  )
}
