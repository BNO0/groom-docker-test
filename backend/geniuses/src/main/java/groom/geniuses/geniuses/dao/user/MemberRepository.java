package groom.geniuses.geniuses.dao.user;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, String> {
    // 로그인 ID를 갖는 객체가 존재하는지 => 존재하면 true 리턴 (ID 중복 검사 시 필요)
    boolean existsByUserId(String loginId);
    // 로그인 ID를 갖는 객체 반환
    Member findByUserId(String loginId);
}