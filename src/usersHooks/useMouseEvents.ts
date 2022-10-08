import React, { useCallback } from "react";
import useSyntaxisCheck from "./useSyntaxisCheck";

export const useMouseEvents = () => {
  let tooltip: { target: null | HTMLElement; title: string } = {
    target: null,
    title: "",
  };

  let tooltipBox: HTMLElement;

  const { changeClassAtInputs } = useSyntaxisCheck();

  const tooltipEvent = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const tooltipTag = target.closest("[data-tooltip]") as HTMLElement;
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
    tooltipBox!.className = "body__tooltipBox";
    tooltipBox.innerHTML = title;
    document.body.append(tooltipBox);
    positionAt(anch, tooltipBox);
  };

  const positionAt = (anch: HTMLElement, elem: HTMLElement) => {
    const coords = anch.getBoundingClientRect();
    const width: number = elem.offsetWidth;
    const height: number = elem.offsetHeight;

    let top: number = coords.top - height - 20,
      left: number = coords.left - (width - anch.offsetWidth) / 2;

    if (top < 70) top = coords.bottom + height - 20;
    if (left < 0) left = 5;
    if (left + elem.offsetWidth > document.documentElement.offsetWidth)
      left = document.documentElement.offsetWidth - elem.offsetWidth - 5;

    tooltipBox.style.top = top + "px";
    tooltipBox.style.left = left + "px";
  };

  return {
    tooltipEvent,
  };
};
