-- ��Ʈ���� �������̱��� --
-- ���ӱ�������ȹ�� --
-- Ver 1.00 2009.05.29 --
-- ���� ����� --

inroom = create_state("inroom")
buttprac = create_state("buttprac")
waitend = create_state("waitend")
buttstart = create_state("buttstart")
playend = create_state("playend")
buttsingle = create_state("buttsingle")
singleend = create_state("singleend")
leave = create_state("leave")


-------��������_��Ʈ���� ��������̱��� --
function inroom:enter()
	create_overlay("inroom_ad", 417, 100, 220, 448, "http://game.ad.hangame.com/adshow?unit=D0016B&svc=TETRIS")
	create_timer("inr_timer", 0, 10000)
	isDeleted = false
end

function inroom:process()
	if (check_timer( "inr_timer" ) == true )
	then
		if (isDeleted == false)
		then 
			delete_overlay("inroom_ad")
			isDeleted = true
		end			
	end
end

function inroom:leave()
	delete_timer("inr_timer")
	delete_overlay("inroom_ad")
end

-- ��������_�����ܿ�������(��Ƽ���)--
function buttstart:enter()
	create_overlay("buttstart_ad", 662, 606, 90, 100, "http://game.ad.hangame.com/adshow?unit=D0016A&svc=TETRIS")
end

function buttstart:process()
end

function buttstart:leave()
	delete_overlay("buttstart_ad")
end

--------��������_�����ܿ�������(�̱۸��)--
function buttsingle:enter()
	create_overlay("single_ad", 648, 614, 90, 100, "http://game.ad.hangame.com/adshow?unit=D0016A&svc=TETRIS")
end

function buttsingle:process()
end

function buttsingle:leave()
	delete_overlay("single_ad")
end