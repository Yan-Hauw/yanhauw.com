import React, { useEffect, useState, useRef } from "react";

//components
import IndexOfContent from "../IndexOfContent";

const getNestedHeadings = (headingElements: any) => {
  const nestedHeadings: any[] = [];

  headingElements.forEach((heading: any) => {
    const { innerText: title, id } = heading;

    if (heading.nodeName === "H2") {
      nestedHeadings.push({ id, title, items: [] });
    } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        title,
      });
    }
  });

  return nestedHeadings;
};

const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = useState([]);

  useEffect(() => {
    const headingElements: any = Array.from(document.querySelectorAll("h2"));

    const newNestedHeadings: any = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, []);

  return { nestedHeadings };
};

interface headingInterface {
  id: string;
  title: string;
  items: any[];
}

const Headings = ({
  headings,
  activeId,
}: {
  headings: headingInterface[];
  activeId: string | undefined;
}) => (
  <ul>
    {headings.map((heading: headingInterface) => (
      <li key={heading.id}>
        <a
          href={`#${heading.id}`}
          onClick={(e) => {
            e.preventDefault();
            const head: Element | null = document.querySelector(
              `#${heading.id}`
            );

            if (head) {
              head.scrollIntoView({
                behavior: "smooth",
              });
            }
          }}
        >
          <IndexOfContent active={heading.id === activeId ? true : false}>
            {heading.title}
          </IndexOfContent>
        </a>

        {heading.items.length > 0 && (
          <ul>
            {heading.items.map((child) => (
              <li
                key={child.id}
                className={child.id === activeId ? "active" : ""}
              >
                <a
                  href={`#${child.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const head: Element | null = document.querySelector(
                      `#${heading.id}`
                    );

                    if (head) {
                      head.scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  {child.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
);

interface callbackHeadingInterface {
  id?: string;
  title?: string;
  items?: any[];
  reduce: any;
}

const useIntersectionObserver = (setActiveId: any) => {
  const headingElementsRef: any = useRef({});

  useEffect(() => {
    const callback = (headings: callbackHeadingInterface) => {
      headingElementsRef.current = headings.reduce(
        (map: any, headingElement: any) => {
          map[headingElement.target.id] = headingElement;
          return map;
        },
        headingElementsRef.current
      );

      const visibleHeadings: any = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromId = (id: string) => {
        headingElements.findIndex((heading) => heading.id === id);
      };

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a: any, b: any) =>
            getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
        );
        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "20% 0px -20% 0px",
    });

    const headingElements = Array.from(document.querySelectorAll("h2, h3"));
    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  });
};

const TableOfContents = () => {
  const [activeId, setActiveId] = useState();
  const { nestedHeadings } = useHeadingsData();
  useIntersectionObserver(setActiveId);

  return (
    <nav aria-label="Table of contents" className="fixed left-0 top-1/4">
      <Headings headings={nestedHeadings} activeId={activeId} />
    </nav>
  );
};

export default TableOfContents;
