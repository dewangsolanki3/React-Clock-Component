
<div className="clock">
<div className="hr" style={{ transform: `rotateZ(${((h % 12) * unit12 + (hourunit))}deg)` }} />
<div className="min" style={{ transform: `rotateZ(${(m * unit60) + (minuteunit)}deg)` }} />
<div className="sec" style={{ transform: `rotateZ(${(s * unit60) + (hourunit + minuteunit)}deg)` }} />
</div>