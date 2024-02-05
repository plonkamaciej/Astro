interface props {
    title: string;
    href: string;
    body: string;
  }


export default function Card({title, href, body} : props) {
    return (
        <>
        <li className="hover:bg-[var(--accent-gradient)] hover:bg-gradient-to-t flex bg-[#23262d] bg-none bg-[100%] transition-[background-position] duration-[0.6s] ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] p-px rounded-[7px] list-style: none;">
        <a href={href}>
            <h2 className="m-0 text-xl transition-colors">
                {title}
                <span>&rarr;</span>
            </h2>
            <p className="mt-2 mb-0">
                {body}
            </p>
        </a>
    </li>

  </>
    );
  }

  