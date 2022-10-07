import React, { useCallback } from "react";

export const useMouseEvents = () => {
  let tooltip: { target: null | HTMLElement; title: string } = {
    target: null,
    title: "",
  };

  let tooltipBox: HTMLElement;

  const tooltipEvent = (e: any) => {
    // const target = e.target as HTMLElement;
    const tooltipTag = e.target.closest("[data-tooltip]") as HTMLElement;
    if (!tooltipTag || tooltip!.target) return;

    tooltip.target = tooltipTag as HTMLElement;
    tooltip.title = tooltipTag.dataset.tooltip as string;

    createTooltipBox(tooltipTag, tooltip.title);

    tooltipTag.onmouseout = (e) => {
      const relatedTarget = e.relatedTarget as HTMLElement;
      if (tooltipTag.contains(relatedTarget)) return;

      tooltip.target = null;
      tooltip.title = "";
      tooltipBox.remove();
      tooltipTag.onmouseout = null;
    };
  };

  const createTooltipBox = (anch: HTMLElement, title: string) => {
    tooltipBox = document.createElement("div");
    tooltipBox!.className = "tooltipBox";
    tooltipBox.innerHTML = title;
    document.body.append(tooltipBox);
    positionAt(anch, tooltipBox);
  };

  const positionAt = (anch: HTMLElement, elem: HTMLElement) => {
    const coords = anch.getBoundingClientRect();
    const width: number = elem.offsetWidth;
    const height: number = elem.offsetHeight;

    let top: number = coords.top - height - 5,
      left: number = coords.left - (width - anch.offsetWidth) / 2;

    // console.log("left: ", left)
    // console.log("coords.left: ", coords.left)
    // console.log("anchWidth ", anch.offsetWidth);
    // console.log("elemWidth ", width);

    tooltipBox.style.top = top + "px";
    tooltipBox.style.left = left + "px";
  };

	
  const blurEventForInput = (e: any) => {
    console.log('onBlur')
		const target = e.target as HTMLElement;
    if (target.tagName !== "INPUT") return;
		console.log(target);
	}
	

	const focusEventForInput = (e: React.FormEvent) => {
		
	}

  return {
    tooltipEvent,
    blurEventForInput,
  };
};
