import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import testImg from "../assets/img/spin.png";
import IconCoin from '../components/icons/icon.coin';
import IconSpinChevronLeft from '../components/icons/icon.spin.chevron.left';
import IconSpinChevronRight from '../components/icons/icon.spin.chevron.right';

import '../css/case.spinner.css';

const CASE_ITEMS = [
  { id: 1, title: 'Karambit',subtitle:"Doppler", type: 'Knife', rarity: 'legendary', weight: 1 },
  { id: 2, title: 'AK-47',subtitle:"Redline", type: 'Rifle', rarity: 'common', weight: 4 },
  { id: 3, title: 'AWP ',subtitle:"Asiimov", type: 'Sniper', rarity: 'common', weight: 4 },
  { id: 4, title: 'Desert Eagle',subtitle:"Blaze", type: 'Pistol', rarity: 'uncommon', weight: 7 },
  { id: 5, title: 'Glock-18',subtitle:"Water Elemental", type: 'Pistol', rarity: 'rare', weight: 15 },
  { id: 6, title: 'UMP-45',subtitle:"Primal Saber", type: 'SMG', rarity: 'epic', weight: 15 },
  { id: 7, title: 'P250',subtitle:"Valence", type: 'Pistol', rarity: 'legendary', weight: 24 },
  { id: 8, title: 'Nova',subtitle:"Sand Dune", type: 'Shotgun', rarity: 'mythical', weight: 30 },
];

const ITEM_HEIGHT = 300;
const BUFFER_COPIES = 100;

function getWeightedRandomItem() {
  const weightedList = CASE_ITEMS.flatMap(item => Array(item.weight).fill(item));
  const index = Math.floor(Math.random() * weightedList.length);
  return weightedList[index];
}

export default function InfiniteSpinner() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const [items, setItems] = useState([]);
  const [spinning, setSpinning] = useState(false);

  const currentRarity = useRef(null);

  const centerItemCheck = () => {
    if (!containerRef.current || items.length === 0) return;
    const container = containerRef.current;
    const scrollCenter = container.scrollTop + container.clientHeight / 2;
    const index = Math.floor(scrollCenter / ITEM_HEIGHT);
    const currentItem = items[index];
    if (currentItem && bgRef.current) {
      const newRarityClass = `rarity-${currentItem.rarity}`;

      if (currentRarity.current !== currentItem.rarity) {
        currentRarity.current = currentItem.rarity;
        bgRef.current.className = `spinner-bg ${newRarityClass}`;

        const sound = new Audio('/sounds/2.wav');
        sound.volume = 0.3;
        sound.play().catch(() => {});
      }
    }
  };

  useEffect(() => {
    const looped = Array.from(
      { length: CASE_ITEMS.length * BUFFER_COPIES },
      (_, i) => CASE_ITEMS[i % CASE_ITEMS.length]
    );
    setItems(looped);

    requestAnimationFrame(() => {
      if (containerRef.current) {
        const totalHeight = looped.length * ITEM_HEIGHT;
        const midpoint = totalHeight / 2;
        containerRef.current.scrollTop = midpoint;
        centerItemCheck();
      }
    });
  }, []);

  useEffect(() => {
    if (!containerRef.current || items.length === 0) return;
    const container = containerRef.current;
    const totalHeight = items.length * ITEM_HEIGHT;

    const handleScroll = () => {
      if (container.scrollTop <= ITEM_HEIGHT * CASE_ITEMS.length) {
        container.scrollTop += CASE_ITEMS.length * ITEM_HEIGHT * (BUFFER_COPIES / 2);
      } else if (container.scrollTop >= totalHeight - ITEM_HEIGHT * CASE_ITEMS.length) {
        container.scrollTop -= CASE_ITEMS.length * ITEM_HEIGHT * (BUFFER_COPIES / 2);
      }
      centerItemCheck();
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [items]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const preventScroll = (e) => {
      if (spinning) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    container.addEventListener('wheel', preventScroll, { passive: false });

    return () => {
      container.removeEventListener('wheel', preventScroll);
    };
  }, [spinning]);

  const handleSpin = () => {
    if (spinning || items.length === 0) return;
    setSpinning(true);

    if (containerRef.current) {
      containerRef.current.classList.add('scroll-lock');
    }

    const container = containerRef.current;
    const currentScroll = container.scrollTop;
    const currentIndex = Math.floor(currentScroll / ITEM_HEIGHT);
    const resultItem = getWeightedRandomItem();

    const forwardStart = currentIndex + 50;
    let targetIndex = -1;

    for (let i = forwardStart; i < items.length; i++) {
      if (items[i].id === resultItem.id) {
        targetIndex = i;
        break;
      }
    }

    if (targetIndex === -1) {
      const backwardStart = currentIndex - 50;
      for (let i = backwardStart; i >= 0; i--) {
        if (items[i].id === resultItem.id) {
          targetIndex = i;
          break;
        }
      }
    }

    if (targetIndex === -1) {
      alert('❌ Не удалось найти подходящую копию предмета.');
      setSpinning(false);
      containerRef.current?.classList.remove('scroll-lock');
      return;
    }

    const offsetRange = ITEM_HEIGHT / 2 - 10;
    const randomOffset = (Math.random() - 0.5) * 2 * offsetRange;

    const scrollTo =
      targetIndex * ITEM_HEIGHT -
      (container.clientHeight / 2 - ITEM_HEIGHT / 2) +
      randomOffset;

    gsap.to(container, {
      scrollTop: scrollTo,
      duration: 18,
      ease: 'power3.out',
      onUpdate: centerItemCheck,
      onComplete: () => {
        alert(`🎯 Yutuq: ${resultItem.title}`);
        setSpinning(false);
        containerRef.current?.classList.remove('scroll-lock');
      },
    });
  };

  return (
    <div className="spinner-root">
      <div className='spinner-bg' ref={bgRef} />
      <button onClick={handleSpin} disabled={spinning} className="spin-button">
        SPIN <span className='spin-price'><IconCoin/>500</span>
      </button>
      <div className="spinner-center">
        <IconSpinChevronLeft />
        <IconSpinChevronRight />
      </div>
      <div ref={containerRef} className="spinner-container">
        <div>
          {items.map((item, i) => {
            const isCentered =
              containerRef.current &&
              Math.abs(
                containerRef.current.scrollTop +
                containerRef.current.clientHeight / 2 -
                (i * ITEM_HEIGHT + ITEM_HEIGHT / 2)
              ) < 1;

            return (
              <div
                key={`${item.id}-${i}`}
                className={`spinner-item ${isCentered ? 'centered' : ''}`}
                style={{ height: ITEM_HEIGHT }}
              >
                <img src={testImg} alt={item.title} />
                <div className='spin_content'>
                  <p>{item.title}</p>
                  <span>{item.subtitle}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
