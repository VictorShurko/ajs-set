import Team from '../class/Team';
import Character from '../class/Character';

test('Добавляем персонажа в команду', () => {
    const hero = new Character('hero');
    const team = new Team();

    team.add(hero);

    expect(()=>{
        team.add(hero);
    }).toThrow();
});

test('Добавляем несколько персонажей', ()=>{
    const heroFirst = new Character('heroFirst');
    const heroSecond = new Character('heroSecond');
    const team = new Team();
    team.addAll(heroFirst, heroSecond, heroFirst);

    const result = team.members.size === 2 && team.members.has(heroFirst) && team.members.has(heroSecond);

    expect(result).toBe(true);
});

test('Конвертируем в массив', ()=>{
    const heroFirst = new Character('heroFirst');
    const heroSecond = new Character('heroSecond');
    const team = new Team();
    team.addAll(heroFirst, heroSecond, heroFirst);

    const correct = [
        { 'name': 'heroFirst' },
        { 'name': 'heroSecond' }
    ];

    expect(team.toArray()).toEqual(correct);
});