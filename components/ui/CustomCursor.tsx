"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = `${mouseX - 5}px`;
      cursor.style.top = `${mouseY - 5}px`;
    };

    const animate = () => {
      followerX += (mouseX - followerX - 18) * 0.12;
      followerY += (mouseY - followerY - 18) * 0.12;
      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;
      requestAnimationFrame(animate);
    };

    const onMouseEnterLink = () => {
      cursor.style.transform = "scale(2)";
      follower.style.width = "60px";
      follower.style.height = "60px";
      follower.style.opacity = "0.8";
    };

    const onMouseLeaveLink = () => {
      cursor.style.transform = "scale(1)";
      follower.style.width = "36px";
      follower.style.height = "36px";
      follower.style.opacity = "0.5";
    };

    window.addEventListener("mousemove", onMouseMove);
    animate();

    const links = document.querySelectorAll("a, button, [role='button']");
    links.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnterLink);
      link.addEventListener("mouseleave", onMouseLeaveLink);
    });

    const observer = new MutationObserver(() => {
      const newLinks = document.querySelectorAll("a, button, [role='button']");
      newLinks.forEach((link) => {
        link.removeEventListener("mouseenter", onMouseEnterLink);
        link.removeEventListener("mouseleave", onMouseLeaveLink);
        link.addEventListener("mouseenter", onMouseEnterLink);
        link.addEventListener("mouseleave", onMouseLeaveLink);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        id="cursor"
        ref={cursorRef}
        aria-hidden="true"
        className="hidden md:block"
      />
      <div
        id="cursor-follower"
        ref={followerRef}
        aria-hidden="true"
        className="hidden md:block"
      />
    </>
  );
}
